# Spring Boot conversion of the Portfolio site

This branch contains a minimal Spring Boot project that serves your existing static portfolio files.

How to build

1. Ensure you have Java 17+ and Maven installed.
2. From the repository root run:

   mvn clean package

How to run

1. After building run:

   java -jar target/portfolio-0.1.0.jar

2. Open http://localhost:8080/ to view the site. Spring Boot serves files placed in src/main/resources/static/ at the root path.

Contact endpoint

A minimal contact POST endpoint is available at POST /api/contact which accepts a JSON body and logs it to the application console.

Notes

- Static site files are copied under src/main/resources/static so the site is served from the Spring Boot app.
- If you prefer Thymeleaf templates instead of static files, tell me and I can switch index.html to a template and add a controller to render it.
