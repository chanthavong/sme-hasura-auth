create function now_utc() returns timestamp as $$
  select now() at time zone 'utc';
$$ language sql;


CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
declare
  _new record;
begin
  _new := new;
  _new. "updated_at" = now_utc();
  return _new;
end;
$$;

CREATE OR REPLACE FUNCTION "public"."gen_random_uuid"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/pgcrypto', 'pg_random_uuid'
  LANGUAGE c VOLATILE
  COST 1;

create table user_log (
  id uuid not null default gen_random_uuid() primary key,
  title text not null,
  tag varchar(255) not null,
  event varchar(255) not null,
  object_id uuid null,
  data jsonb null,
  origin jsonb null,
  user_id uuid not null,
  created_at timestamp  without time zone not null default now_utc(),
  updated_at timestamp  without time zone not null default now_utc()
);



CREATE TABLE meta (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    key character varying NOT NULL,
    key_group character varying NULL,
    lo character varying NOT NULL,
    en character varying NULL,
    active boolean default true,
    is_default boolean default false,
    description character varying NULL,
    options jsonb NULL,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);


CREATE TABLE fund_src (
    id character varying NOT NULL PRIMARY KEY,
    lo character varying NOT NULL,
    en character varying NULL,
    active boolean default true,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);

-- comment column and table
comment on column fund_src.lo is 'The fund source name';
comment on table fund_src is 'The fund source table';



CREATE TABLE fund (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    fund_src_id character varying NOT NULL,
    title character varying NOT NULL,
    budget numeric(20,2) NOT NULL,
    balance numeric(20,2) NULL,
    code character varying NULL,
    active boolean default true,
    start_date DATE NULL,
    end_date DATE NULL,
    description character varying NULL,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);

CREATE TABLE bank_type (
    id character varying NOT NULL PRIMARY KEY,
    lo character varying NOT NULL,
    en character varying NOT NULL,
    code character varying  NULL,
    active boolean default true,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);

CREATE TABLE bank (
    id character varying NOT NULL PRIMARY KEY,
    lo character varying NOT NULL,
    en character varying NOT NULL,
    code character varying  NULL,
    active boolean default true,
    bank_type character varying NULL,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);

CREATE TABLE bank_branch (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    bank_id character varying NOT NULL,
    name character varying NOT NULL,
    code character varying  NULL,
    active boolean default true,
    address character varying  NULL,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);

create table fund_contract_status(
    id character varying NOT NULL PRIMARY KEY,
    lo character varying NOT NULL,
    en character varying NOT NULL,
    active boolean default true,
    approved boolean default false,
    color character varying NULL DEFAULT '#A9A9A9',
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL
);

CREATE TABLE fund_contract (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    fund_id uuid NOT NULL,
    bank_id character varying NOT NULL,
    title character varying NOT NULL,
    budget numeric(20,2) NOT NULL,
    interest numeric(6,2) NOT NULL,
    fees numeric(6,2) NOT NULL,
    repayment numeric(20,2) NULL default 0,
    code character varying NULL,
    trash boolean default false,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    active boolean default false,
    detail character varying NULL,
    close_date DATE NULL,
    closed boolean default false,
    lock boolean default false,
    fund_contract_status_id character varying NULL,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);

comment on column fund_contract.lock is 'cannot edit or modify when lock = true';


CREATE TABLE fund_contract_repayment (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    fund_contract_id uuid NOT NULL,
    title character varying NOT NULL,
    amount numeric(20,2) NOT NULL,
    trash boolean default false,
    on_date DATE NOT NULL,
    interest numeric(20,2) NULL,
    fee numeric(20,2) NULL,
    category_key character varying NULL,
    meta_id uuid NULL,
    note character varying NULL,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);

CREATE TABLE busines_type (
    id character varying NOT NULL PRIMARY KEY,
    lo character varying NOT NULL,
    en character varying NOT NULL,
    active boolean default true,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);
comment on table busines_type is 'ກິດ​ຈະ​ກຳຂອງ​ທຸ​ລະ​ກິດ (ແຍກ​ປະ​ເພດຈາກ​ຊື່​ທຸ​ລະ​ກິດ) [ຂາຍເຄື່ອງກໍ່ສ້າງ, ໂຮງພິມ]';

CREATE TABLE busines_class (
    id character varying NOT NULL PRIMARY KEY,
    lo character varying NOT NULL,
    en character varying NOT NULL,
    active boolean default true,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);
comment on table busines_class is 'ການຈັດປະເພດ E&S [A, B, C, D, E]';

CREATE TABLE busines_sector (
    id character varying NOT NULL PRIMARY KEY,
    lo character varying NOT NULL,
    en character varying NOT NULL,
    active boolean default true,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);
comment on table busines_sector is 'ຂະແໜງການ [ກະ​ສິ​ກຳ​, ການ​ຄ້າ, ບໍ​ລິ​ການ, ຫັດ​ຖະ​ກຳ, ອຸດ​​ສາ​ຫະ​ກຳ]';

CREATE TABLE busines_size (
    id character varying NOT NULL PRIMARY KEY,
    lo character varying NOT NULL,
    en character varying NOT NULL,
    active boolean default true,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);
comment on table busines_size is '"​ຂະ​ໜາດ​ທຸ​ລະ​ກິດ [ຈຸນ​ລະ​ພາກ, ນ້ອຍ, ກາງ] "​ຂະ​ໜາດ​ທຸ​ລະ​ກິດ [ຈຸນ​ລະ​ພາກ, ນ້ອຍ, ກາງ]';

CREATE TABLE busines (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    certificate_no character varying NOT NULL,
    code character varying NOT NULL,
    lo character varying NOT NULL,
    en character varying NOT NULL,
    owner character varying NOT NULL,
    gender character varying NULL,
    phone character varying NULL,
    phone2 character varying NULL,
    is_condition boolean default true, 
    describe text NULL,
    staff integer NOT NULL,
    number_of_assets numeric(20,2) NOT NULL,
    village_id character varying NULL,
    village_name character varying NULL,
    address character varying NULL,
    default_account_id character varying NULL,
    trash boolean default false,
    busines_size_id character varying NULL,
    busines_sector_id character varying NULL,
    busines_class_id character varying NULL,
    busines_type_id character varying NULL,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);
comment on column busines.describe is 'ກິດ​ຈະ​ກຳຂອງ​ທຸ​ລະ​ກິດ (ອະ​ທິ​ບາຍ​ລະ​ອຽດ) [ຂາຍເຄື່ອງກໍ່ສ້າງ, ພິມປະຕິທິນ(ຫ້ອຍຝາ,ຕັ້ງໂຕະ,ບັດອໍາພອນປີໃໝ່]'; 
comment on column busines.certificate_no is 'ເລກທີໃບທະບຽນວິ​ສາ​ຫະ​ກິດ [4372/ຫຈທ, 6178/ຫຈທ]';
comment on column busines.number_of_assets is 'ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK)'

CREATE TABLE loan_collateral (
    id character varying NOT NULL PRIMARY KEY,
    lo character varying NOT NULL,
    en character varying NOT NULL,
    active boolean default true,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);
comment on table loan_collateral is 'ປະເພດຂອງຫຼັກຊັບ(ຈັດປະເພດ)(ດິນ, ອາຄານ, ທີ່ດິນ + ອາຄານ, ພາຫະນະ, ເງິນຝາກ, ແລະອື່ນໆ)';

CREATE TABLE loan_purpose (
    id character varying NOT NULL PRIMARY KEY,
    lo character varying NOT NULL,
    en character varying NOT NULL,
    active boolean default true,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);
comment on table loan_purpose is 'ເປົ້າໝາຍເງິນກູ້(ແຍກ​ປະ​ເພດ) [ຊື້ສິນຄ້າເພື່ອຂາຍ, ຊື້ເຄື່ອງຈັກ]';

CREATE TABLE loan_status (
    id character varying NOT NULL PRIMARY KEY,
    lo character varying NOT NULL,
    en character varying NOT NULL,
    active boolean default true,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);
comment on table loan_status is 'ສະ​ຖາ​ນະ​ຂອງ​ເງິນກູ້ "ສະ​ຖາ​ນະ​ຂອງ​ເງິນ​ກູ້ ​*ປ່ຽນແປງຕາມແຕ່ລະເດືອນ[ປິດ, ປະ​ຈຸ​ບັນ​, NPL-​ຊຳ​ລະ​ໝົດ, -NPL-ຍັງ​ຄ້າງ​​ຊຳ​ລະ]-[Status of Loan: ended, current, NPL-ended, NPL-not ended]';

CREATE TABLE loan_type (
    id character varying NOT NULL PRIMARY KEY,
    lo character varying NOT NULL,
    en character varying NOT NULL,
    active boolean default true,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);
comment on table loan_type is 'ປະ​ເພດ​ເປົ້າ​ຫມາຍ​ເງິນ​ກູ້ [​​ທຶນ​ຫມູນ​ວຽນ, ທຶນ​ຄົງ​ທີ່] **ຈາກ​ທະ​ນາ​ຄານ';

CREATE TABLE loan_window (
    id character varying NOT NULL PRIMARY KEY,
    lo character varying NOT NULL,
    en character varying NOT NULL,
    active boolean default true,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);
comment on table loan_window is 'ຮູບແບບເງິນກູ້ [Regular ກັບ Emergency]';


CREATE TABLE loan (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    bank_branch_id uuid NOT NULL,
    title character varying NOT NULL,
    code character varying NULL,
    loan_fees numeric(6,2) NOT NULL,
    loan_amount_approved numeric(20,2) NOT NULL,
    amount numeric(20,2) NOT NULL,
    interest numeric(6,2) NOT NULL,
    repayment numeric(20,2) NULL,
    is_free_cost boolean default false,
    inital_free_cost date NULL,
    last_free_cost date NULL,
    closed boolean default false,
    close_date DATE NULL,
    purpose character varying NOT NULL,
    total_of_collateral numeric(20,2) NOT NULL,
    collateral character varying NOT NULL,
    contract_no character varying NOT NULL,
    contract_date DATE NOT NULL,
    contract_end DATE NOT NULL,
    account_number character varying NOT NULL,
    staff integer NULL,
    remark character varying NULL, 
    grade character varying NULL,
    skip_no integer NOT NULL,
    trash boolean default false,
    covid_affected boolean default false,
    loan_purpose_id character varying NOT NULL,
    loan_type_id character varying NOT NULL,
    loan_collateral_id character varying NOT NULL,
    loan_status_id character varying NOT NULL,
    fund_contract_id uuid NULL,
    loan_window_id character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NOT NULL,
    busines_id uuid NULL,
    responsible_staff character varying NULL
);

comment on column loan.loan_fees is 'ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​';
comment on column loan.purpose is 'ເປົ້າໝາຍເງິນກູ້​​(ອະ​ທິ​ບາຍ​ລະ​ອຽດ)';
comment on column loan.is_free_cost is 'ໄລຍະປອດທຶນ';

CREATE TABLE loan_repayment (
    id uuid default gen_random_uuid()  NOT NULL PRIMARY KEY,
    loan_id uuid NOT NULL,
    on_date date NOT NULL,
    amount numeric(20,2) NOT NULL,
    interest numeric(20,2) NOT NULL,
    trash boolean default false,
    fee numeric(20,2)  NULL,
    category_key character varying NULL,
    note character varying NULL,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL
);

CREATE TABLE loan_disbursed (
    id uuid default gen_random_uuid()  NOT NULL PRIMARY KEY,
    loan_id uuid NOT NULL,
    on_date date NOT NULL,
    amount numeric(20,2) NOT NULL,
    fee numeric(20,2) NOT NULL,
    note character varying NULL,
    trash boolean default false,
    category_key character varying NULL,
    created_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    updated_at timestamp without time zone DEFAULT now_utc() NOT NULL,
    user_id uuid NULL,
    responsible_staff character varying NULL
);

CREATE TRIGGER set_fund_src_updated_at BEFORE UPDATE ON fund_src FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
CREATE TRIGGER set_fund_updated_at BEFORE UPDATE ON fund FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();

create trigger set_bank_updated_at before update on bank for each row execute FUNCTION public.set_current_timestamp_updated_at();
create trigger set_bank_branch_updated_at before update on bank_branch for each row execute FUNCTION public.set_current_timestamp_updated_at();

create trigger set_loan_updated_at before update on loan for each row execute FUNCTION public.set_current_timestamp_updated_at();
create trigger set_loan_repayment_updated_at before update on loan_repayment for each row execute FUNCTION public.set_current_timestamp_updated_at();

create trigger set_loan_collateral_updated_at before update on loan_collateral for each row execute FUNCTION public.set_current_timestamp_updated_at();
create trigger set_loan_purpose_updated_at before update on loan_purpose for each row execute FUNCTION public.set_current_timestamp_updated_at();
create trigger set_loan_type_updated_at before update on loan_type for each row execute FUNCTION public.set_current_timestamp_updated_at();
create trigger set_loan_disbursed_updated_at before update on loan_disbursed for each row execute FUNCTION public.set_current_timestamp_updated_at();
create trigger set_loan_status_updated_at before update on loan_status for each row execute FUNCTION public.set_current_timestamp_updated_at();

create trigger set_busines_updated_at before update on busines for each row execute FUNCTION public.set_current_timestamp_updated_at();
create trigger set_busines_type_updated_at before update on busines_type for each row execute FUNCTION public.set_current_timestamp_updated_at();
create trigger set_busines_class_updated_at before update on busines_class for each row execute FUNCTION public.set_current_timestamp_updated_at();
create trigger set_busines_sector_updated_at before update on busines_sector for each row execute FUNCTION public.set_current_timestamp_updated_at();
create trigger set_busines_size_updated_at before update on busines_size for each row execute FUNCTION public.set_current_timestamp_updated_at();

create trigger set_fund_contract_updated_at before update on fund_contract for each row execute FUNCTION public.set_current_timestamp_updated_at();
create trigger set_fund_contract_repayment_updated_at before update on fund_contract_repayment for each row execute FUNCTION public.set_current_timestamp_updated_at();
create trigger set_fund_contract_status_updated_at before update on fund_contract_status for each row execute FUNCTION public.set_current_timestamp_updated_at();

ALTER TABLE ONLY fund
    ADD CONSTRAINT fund_src_fkey FOREIGN KEY (fund_src_id) REFERENCES fund_src(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY fund_contract
    ADD CONSTRAINT fund_fkey FOREIGN KEY (fund_id) REFERENCES fund(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY fund_contract
    ADD CONSTRAINT bank_fkey FOREIGN KEY (bank_id) REFERENCES bank(id) ON UPDATE CASCADE ON DELETE RESTRICT;
-- ALTER TABLE ONLY fund_contract_repayment
ALTER TABLE ONLY fund_contract_repayment
    ADD CONSTRAINT fund_contract_fkey FOREIGN KEY (fund_contract_id) REFERENCES fund_contract(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY fund_contract_repayment ADD CONSTRAINT meta_fkey FOREIGN KEY (meta_id) REFERENCES meta(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY fund_contract ADD CONSTRAINT fund_contract_status_fkey FOREIGN KEY (fund_contract_status_id) REFERENCES fund_contract_status(id) ON UPDATE CASCADE ON DELETE RESTRICT;

-- bank_branch
ALTER TABLE ONLY bank_branch 
    ADD CONSTRAINT bank_fkey FOREIGN KEY (bank_id) REFERENCES bank(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY bank
    ADD CONSTRAINT user_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY auth.users
    ADD CONSTRAINT bank_branch_fkey FOREIGN KEY (bank_branch_id) REFERENCES bank_branch(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY bank
    ADD CONSTRAINT type_fkey FOREIGN KEY (type_id) REFERENCES bank_type(id) ON UPDATE CASCADE ON DELETE RESTRICT;


-- busines
ALTER TABLE ONLY busines
    ADD CONSTRAINT busines_type_fkey FOREIGN KEY (busines_type_id) REFERENCES busines_type(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY busines 
    ADD CONSTRAINT busines_sector_fkey FOREIGN KEY (busines_sector_id) REFERENCES busines_sector(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY busines 
    ADD CONSTRAINT busines_class_fkey FOREIGN KEY (busines_class_id) REFERENCES busines_class(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY busines
    ADD CONSTRAINT busines_size_fkey FOREIGN KEY (busines_size_id) REFERENCES busines_size(id) ON UPDATE CASCADE ON DELETE RESTRICT;

-- loan
ALTER TABLE ONLY loan
    ADD CONSTRAINT loan_purpose_fkey FOREIGN KEY (loan_purpose_id) REFERENCES loan_purpose(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY loan
    ADD CONSTRAINT loan_type_fkey FOREIGN KEY (loan_type_id) REFERENCES loan_type(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY loan
    ADD CONSTRAINT loan_collateral_fkey FOREIGN KEY (loan_collateral_id) REFERENCES loan_collateral(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY loan
    ADD CONSTRAINT loan_status_fkey FOREIGN KEY (loan_status_id) REFERENCES loan_status(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY loan 
    ADD CONSTRAINT bank_branch_id FOREIGN KEY (bank_branch_id) REFERENCES bank_branch(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY loan 
 ADD CONSTRAINT fund_contract_id FOREIGN KEY (fund_contract_id) REFERENCES fund_contract(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY loan 
 add CONSTRAINT busines_fk FOREIGN KEY (busines_id) REFERENCES busines(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY loan 
 add CONSTRAINT loan_window_id_fk FOREIGN KEY (loan_window_id) REFERENCES loan_window(id) ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE ONLY loan_repayment
    ADD CONSTRAINT loan_fkey FOREIGN KEY (loan_id) REFERENCES loan(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY loan_disbursed
    ADD CONSTRAINT loan_fkey FOREIGN KEY (loan_id) REFERENCES loan(id) ON UPDATE CASCADE ON DELETE RESTRICT;



-- drop 
drop table loan;
drop table loan_type;
drop table loan_purpose;
drop table loan_collateral;
drop table loan_repayment;


drop table fund_contract_repayment;
drop table fund_contract;