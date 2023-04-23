# SQL Manager 2005 for MySQL 3.6.5.1
# ---------------------------------------
# Host     : localhost
# Port     : 3306
# Database : db_posts

SET FOREIGN_KEY_CHECKS=0;

CREATE DATABASE db_posts
    CHARACTER SET 'latin1'
    COLLATE 'latin1_swedish_ci';

#
# Structure for the bitacoras table : 
#

CREATE TABLE bitacoras (
  id int(11) NOT NULL AUTO_INCREMENT,
  userId int(11) NOT NULL,
  postId int(11) NOT NULL,
  action varchar(25) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Structure for the posts table : 
#

CREATE TABLE posts (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description text,
  published tinyint(1) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Structure for the reviews table : 
#

CREATE TABLE reviews (
  id int(11) NOT NULL AUTO_INCREMENT,
  userId int(11) NOT NULL,
  postId int(11) NOT NULL,
  rating int(11) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Structure for the users table : 
#

CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  mail varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  name varchar(150) DEFAULT NULL,
  role varchar(25) NOT NULL,
  status tinyint(4) NOT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

#
# Data for the users table  (LIMIT 0,500)
#

INSERT INTO users (id, mail, password, name, role, status, createdAt, updatedAt) VALUES 
  (1,'razadi07@gmail.com','$2a$10$qXESNo8pc3DxSV3YN6F1PedUPAjBsE47X/ixod1ZXM.WIeOYvMtPm','Raúl Zamudio Diaz','ADMIN_ROLE',1,'2023-04-22','2023-04-22');

COMMIT;

