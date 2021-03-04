INSERT INTO tb_user (name, email, password) VALUES ('Alex Green', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG'); 
INSERT INTO tb_user (name, email, password) VALUES ('Maria Luisa', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
  
INSERT INTO tb_contracts (value, date) VALUES (100.0, TIMESTAMP WITHOUT TIME ZONE '2020-07-14T10:00:00Z');  
INSERT INTO tb_contracts (value, date) VALUES (200.0, TIMESTAMP WITHOUT TIME ZONE '2020-07-14T10:00:00Z'); 
INSERT INTO tb_contracts (value, date) VALUES (300.0, TIMESTAMP WITHOUT TIME ZONE '2020-07-14T10:00:00Z');  
INSERT INTO tb_contracts (value, date) VALUES (400.0, TIMESTAMP WITHOUT TIME ZONE '2020-07-14T10:00:00Z');  
INSERT INTO tb_contracts (value, date) VALUES (500.0, TIMESTAMP WITHOUT TIME ZONE '2020-07-14T10:00:00Z');  
INSERT INTO tb_contracts (value, date) VALUES (600.0, TIMESTAMP WITHOUT TIME ZONE '2020-07-14T10:00:00Z');  
INSERT INTO tb_contracts (value, date) VALUES (700.0, TIMESTAMP WITHOUT TIME ZONE '2020-07-14T10:00:00Z');  
INSERT INTO tb_contracts (value, date) VALUES (800.0, TIMESTAMP WITHOUT TIME ZONE '2020-07-14T10:00:00Z');  
INSERT INTO tb_contracts (value, date) VALUES (900.0, TIMESTAMP WITHOUT TIME ZONE '2020-07-14T10:00:00Z');  
INSERT INTO tb_contracts (value, date) VALUES (1000.0, TIMESTAMP WITHOUT TIME ZONE '2020-07-14T10:00:00Z');  
INSERT INTO tb_contracts (value, date) VALUES (1100.0, TIMESTAMP WITHOUT TIME ZONE '2020-07-14T10:00:00Z');  
INSERT INTO tb_contracts (value, date) VALUES (1200.0, TIMESTAMP WITHOUT TIME ZONE '2020-07-14T10:00:00Z');  
 
