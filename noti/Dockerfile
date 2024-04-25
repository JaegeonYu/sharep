FROM openjdk:17-jdk-alpine

COPY . .

RUN ["./gradlew", "bootJar"]

ENTRYPOINT ["./gradlew", "bootRun"]
