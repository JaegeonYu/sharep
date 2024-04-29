pipeline {
  agent any

  environment {
    METADATA = '/var/lib/jenkins/workspace/share-p'

    SRC_ENV = './fe'
    SRC_RESOURCES = './be/src/main/resources'
  }

  tools {
      gradle 'default'
      nodejs 'default'
  }


  stages {
    stage('파일 복사') {
      when {
        branch 'main'
      }
      steps {
        sh "rm -f ${env.SRC_RESOURCES}/application.yml && mkdir ${env.SRC_RESOURCES} || true"
        sh "cp ${env.METADATA}/be/application.yml ${env.SRC_RESOURCES}/application.yml"

        sh "rm -f ${env.SRC_ENV}/.env"
        sh "cp ${env.METADATA}/fe/.env ${env.SRC_ENV}/.env"
      }
    }

    stage('빌드') {
      when {
        branch 'main'
      }
      parallel {
        stage("Spring Boot App 빌드") {
          steps {
            dir('be') {
              /** clean and slow build with info **/
              // sh "chmod +x gradlew && ./gradlew clean --info build"

              /** normal build **/
              // sh "chmod +x gradlew && ./gradlew build"

              /** fast build **/
              sh 'chmod +x gradlew && ./gradlew bootJar'
            }
          }
        }

        stage('React App 빌드') {
          steps {
            dir('fe') {
              sh 'npm i && npm run build'
            }
          }
        }
      }
    }

    stage('Container 재시작') {
      when {
        branch 'main'
      }
      steps {
        sh "docker compose -f ${env.METADATA}/docker-compose.yml restart be fe"
      }
    }
  } 
}
