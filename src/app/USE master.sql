USE master
GO
IF NOT EXISTS (
   SELECT name
   FROM sys.databases
   WHERE name = N'TutorialDB'
)
--create database
CREATE DATABASE [TutorialDB]
GO
USE [TutorialDB]
IF OBJECT_ID('dbo.Customers', 'U') IS NOT NULL
DROP TABLE dbo.Customers
GO
--create table
CREATE TABLE dbo.Customers
(
   userId        INT    NOT NULL   PRIMARY KEY, -- primary key column
   firstName     [NVARCHAR](50)  NOT NULL,
   lastName  [NVARCHAR](50)  NOT NULL,
   email     [NVARCHAR](50)  NOT NULL,
   mobile    [NVARCHAR](50)  NOT NULL
);
GO
--add data
INSERT INTO dbo.Customers
   ([UserId],[firstName],[lastName],[email],[mobile])
VALUES
   ( 101, N'Jeya', N'Reshma', N'jeyareshma30@gmail.com',N'8940047096'),
   ( 102, N'Jeni', N'Reshman', N'jenireshman29@gmail.com',N'1234567890'),
   ( 103, N'Aasbin', N'Reeja',N'aasbinreeja21@gmail.com',N'6789452310'),
   ( 104, N'Aasbin', N'Reeban', N'aasbinreeban27@gmail.com',N'2345678091')
GO
SELECT * FROM dbo.Customers;
--update data
UPDATE Customers
SET firstName='Aashika',lastName='Aspathi' WHERE userID=103;
SELECT * FROM dbo.Customers;
--select column
SELECT userId,email FROM Customers;
--delete data
DELETE FROM CUSTOMERS WHERE userId=102;
SELECT * FROM dbo.Customers;
