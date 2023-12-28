import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
const config = dotenv.config();

const App = express();

App.use(express.json());
App.use(express.urlencoded({extended: false}));
App.use(cookieParser());


if(process.env.NODE_ENV === "development") {
    App.use(morgan("dev"));
}


App.get("/api/v1/test", (req, res)=> {
    res.json({message: "Welcome to Thiernope Services"});
})


const PORT = process.env.PORT || 4000;

App.listen(PORT, () => {
console.log(`${chalk.green.bold("✓")} App running in ${chalk.blue.bold(`${process.env.NODE_ENV}`)} mode and on port ${chalk.yellow.bold(`${process.env.PORT}`)}`)
});