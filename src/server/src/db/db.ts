import * as sqlite from "sqlite3";
import * as bcrypt from "bcrypt";
import { createConnection, Connection } from "typeorm";
import "reflect-metadata";
import md5 from "md5";

const DBSOURCE = "db.sqlite";

const sqlite3 = sqlite.verbose();
const db = new sqlite3.Database('./../../db/sqlite.db');

var _connection: Connection;
