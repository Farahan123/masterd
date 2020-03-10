# Spring Boot Angular Reporting application

## prerequisite
Java 8 ,
Mongodb and
node v12.12.0 install

## To run API:

```
cd data-reports

mvn clean install

mvn spring-boot:run

This will start application on http://localhost:8080/api 
```


## To Run UI
```
cd report-ui
npm install
ng serve
Launch app in browser : http://localhost:4200 
```

## Add data

```
http://localhost:8080/api/team/player

{
   "playerName" : "Rishab pant",
   "run" :100
}
```
## 

