create database membercounter;

drop table groups cascade;
create table groups(
    group_id int generated always as identity primary key,
    group_telegram_id text not null,
    group_name varchar(226) not null,
    group_member_count int not null,
    group_username varchar(126) 
); 

drop table adderhuman cascade;
create table adderhuman(
    adder_id int generated always as identity primary key,
    adder_telegram_id bigint not null,
    adder_nickname varchar(126),
    adder_username varchar(126),
    added_users int not null,
    group_telegram_id text not null
);