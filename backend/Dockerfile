# Build Stage
FROM maven:3.9.7-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package -DskipTests

# Package Stage
FROM openjdk:17-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
#EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
