
# MySql 

SQL (Sql is not case sensitive)

#### Creating a database

~~~~bash 
create database temp1;
~~~~

#### Removing a database
~~~~bash 
drop database temp2;
~~~~

## Working with Tables

#### Creating a table
~~~~bash 
create table 
~~~~

#### Insert a values in tables 

~~~~bash 
INSERT INTO student VALUES(1, "RAHUL",21);INSERT INTO student VALUES(2,"mohan",23);
~~~~


#### Drop a table

~~~~bash
delete from student2 where name = "Rohan";
~~~~

## Formate on later


# show databases;
# CREATE DATABASE temp1;
# create database temp2;
# show databases;
# drop database temp2;
# drop database temp1;
# create database college;
# use college;
# show tables;
# create table student (id INt PRIMARY KEY,name VARCHAR(50),age INT NOT NULL);
# show tables;
# select * from student;
# INSERT INTO student VALUES(1, "RAHUL",21);
# INSERT INTO student VALUES(2,"mohan",23);
# select * from student;
# show tables;
# create table student2 (id int primary key,class tinyint not null,attendence tinyint);
# show tables;
# select * from student2;
# insert into student2 values(2,6,23);
# select * from student2;
# drop table student2;
# show tables;
# drop table student;
# create table student(rollno int primary key,name varchar(50));
# insert into student (rollno ,name) values(21,"mohit"),(1,"albert"),(13,"nikhil")
# select * from student;
# insert into student (rollno,name) values(32,"Rohan");
# select * from student;
# create database xyz_company;
# show databases;
# select database();
# use xyz_company;
# select database();
# create table employee(id int primary key, name varchar(30),salary int);
# select * from employee;
# insert into employee (id,name,salary) values(1,"John Doe",50000),(2,"Jane Smith",60000),(3,"Michael Johnson",55000),(4,"Emily Davis",65000);
# select * from employee;
# insert into employee values(5, 'David Wilson', 70000);
# select * from employee;
# create database temp1;
# use temp1;
# select database();
# create table  emp(id int , salary int default 25000);
# insert into emp (id) values(33);
# select * from emp;
# use xyz_company;
# select database();
# create database voter_r;
# use voter_r;
# create table voter_list(id int primary key ,age int check (age >= 18),name varchar(30));
# insert into voter_list values(21,19,"Rahul Kumar");
# select * from voter_list;
# insert into voter_list values(21,13,"Mohan Singh"); // not work becouse of check 
# show databases;
# select database();
# create database college1;
# use college1;
# create table student(rollno int primary key,name varchar(50),marks int not null,grade varchar(1),city varchar(20));
# insert into student(rollno,name,marks,grade,city) values (201,"Samantha",92,"A","Chicago"),(202,"Michael",68,"C","Seattle"),(203,"Emily",79,"B","Boston"),(204,"David",55,"D","Los Angels"),(205,"Sophia",88,"B","Houston"),(206,"Danial",75,"C","Miami"),(207,"Oliva",96,"A","New York"),(208,"Jacob",62,"D","San Francisco");

# Select 

# select name,marks from student;
# select distinct city from student;
# select * from student where marks>80;
# select * from student where grade<"B";
# select * from student where marks>80 and grade <"B";
# select * from student where marks+10>100;
# select * from student where marks>80 and city = "New York";
# select * from student where marks between 80 and 90;
# select * from student where city in ("Boston","Houston");
# select * from student where city not in ("Boston","Houston");
# select * from student limit 3;
# select * from student order by city asc limit 3;
 
# Aggregate functions

# select count(rollno) from student;
# select count(rollno) from student where marks>80;

# select city,count(name) from student group by city;

# select city ,avg(marks) from student group by city,marks order by marks desc; 

## 

# select database();
# create table payment_info(customer_id int primary key,customer varchar(30) not null,mode enum("Netbanking","Credit Card","Debit Card") not null,city varchar(30) not null);

# insert into payment_info  values(201,"Emily Johnson","Netbanking","San Diago");
# select mode from payment_info;

# Deleting a row in table 

# delete from payment_info where customer_id = 202;

# insert into payment_info values(202,"Johnson bred","netbanking","Boston"),
# (203,"Ethan Sinclair","Credit Card","Miami"),
# (211,"Maya Hernandez","Credit Card","Seattle"),
# (204,"Liam Donovan","Netbanking","Denver"),
# (205,"Sophia Nguyen","Credit Card","New Orleans"),
# (206,"Caleb Foster","Debit Card","Minneapolis"),
# (207,"Ava Patel","Debit Card","Phonix"),
# (208,"Lucas Carter","Netbanking","Nashville"),
# (209,"Isabella Martinez","Netbanking","Nashville"),
# (210,"Jockson Brooks","Credit Card","Boston");

# select * from payment_info;
# select mode,count(customer_id) from payment_info group by mode;

# select * from student;
# select grade,count(name) from student group by grade;

## Having Clause
# select count(name),city from student group by city having max(marks) >90;

## Order 
# SELECT city,count(name) FROM student WHERE grade = "A" GROUP BY city HAVING MAX(marks)>90;

## Update table

# update student set grade = "O" where grade = "A";
# select * from student;

# update student set grade = "A" where grade = "O";
# select * from student; 

# insert into student values (209,"Rahul ",77,"B","Delhi");
# select * from student;

### Increasing marks of all student 3 times
# update student set marks = marks +1;
# select * from student;

### Updating grade 
# update student set grade = "A" where marks between 90 and 100;
# select * from student;


## Delete row in table 
# delete from student where marks <60;
# select * from student; 

## Cascading on Foreign Key

# create table dept(id int primary key,name varchar(50));
# create table teacher(id int primary key,name varchar(50),dept_id int,foreign key(dept_id) references dept(id));

# insert into dept values(2,"Mohit ");
# insert into teacher values (101,"Adam",1),(102,"Eve",2);

# drop table teacher;

# create table teacher (id int primary key,name varchar(50),dept_id int,foreign key(dept_id) references dept(id) on delete cascade on update cascade);
# insert into teacher values (101,"Adam",1),(102,"Eve",2);
# select * from teacher;

# update dept set id =3 where id = 2;

## Table queries more (Alter)

# alter table student add column age int;
 
# insert into student values (211,"Rakshit",67,"D","Dallas",14);
# select * from student;

# alter table student drop column age;
# select * from student;

# alter table payment_info rename to payment_information;
# show tables;

# select * from payment_information;
# alter table payment_information add column age int not null;
# select * from payment_information;

# alter table payment_information change age age_i int;
# select * from payment_information;

# alter table payment_information modify age_i tinyint;
# select * from payment_information;  


## delete data from table 
# turncate table dept;

# delete from student where marks <80; 


## Joins in tables

# inner Joins
# select * from payment_information;
# select * from student inner join payment_information on student.rollno = payment_information.customer_id;
# select name,customer from student inner join payment_information on student.rollno = payment_information.customer_id;

## Outer Joins 

# Left Join

# insert into student values (212,"Bheem",99,"A","Dholakpur",15);
# select * from student as s left join payment_information as p on s.rollno = p.customer_id;
# select * from payment_information as p left join student as s on p.customer_id = s.rollno;

# Right Join

# select * from student as s right join payment_information as p on s.rollno = p.customer_id ;
# select * from payment_information as p right join student as s on p.customer_id = s.rollno;

# Full Join

# select * from student as s right join payment_information as p on s.rollno = p.customer_id union select * from student as s left join payment_information as p on s.rollno = p.customer_id;

## Left Exclusive join && Right Exclusive join 

# Left exclusive join 

# select * from student as s left join payment_information as p on s.rollno = p.customer_id where p.customer_id is null;
# select * from payment_information as p left join student as s on p.customer_id = s.rollno where s.rollno is null;

# Right exclusive join dept

# select * from student as s right join payment_information as p on s.rollno = p.customer_id where s.rollno is null;
# select * from payment_information as p right join student as s on p.customer_id = s.rollno where p.customer_id is null;


# Inner exclusive join

# select * from student as s left join payment_information as p on s.rollno = p.customer_id where p.customer_id is not null;


## Self Join (Work on Same table)

# select a.name as manager_name;b.name from employee as a join employee as b on a.id = b.manager_id;

# [ Try on different tables = return inner exclusive value]
# select s.name as stu_name,p.customer as c_name from student as s join payment_information as p on s.rollno = p.customer_id; 
# select * from student as s join payment_information as p on s.rollno = p.customer_id;


# Sql Sub Queries

# Where

# select name,marks from student where marks > (select avg(marks) from student);   
# select rollno from student where rollno in (select rollno from student where rollno % 2 = 0);


# From 

#  select max(marks) from (select * from student where city = "Delhi") as temp;

# MySql Views 


# create view student_view as (select rollno,marks,grade from student);
# show tables;
# select * from student_view;











