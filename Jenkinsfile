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
        sh 'docker compose -f ${env.METADATA}/docker-compose.yml restart fe $(docker compose -f ${env.METADATA}/docker-compose.yml config --services | grep \'^be\')'
      }
    }
  }

    post {
    success {
      script {
        def authorName = sh(script: 'git show -s --pretty=%an', returnStdout: true).trim()
        def commiterName = sh(script: 'git show -s --pretty=%cn', returnStdout: true).trim()

        mattermostSend(
          color: 'good',
          message: "${env.BRANCH_NAME}: ${commiterName}님이 커밋하고 ${authorName}님이 요청한 ${env.BUILD_NUMBER}번째 Merge 나왔습니다~ (<${env.BUILD_URL}|상세정보>)",
          endpoint: 'https://meeting.ssafy.com/hooks/4j87ayp3g7db9pg3nzun1efrdw',
          icon: 'https://www.notion.so/image/https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2699%2FPNG%2F512%2Fjenkins_logo_icon_170552.png?table=block&id=575d933c-a155-4d41-987e-887b341928ba&spaceId=0f7cf07a-b632-46e9-b39b-7c12c129b0d0&userId=fcb99ecb-2346-4edb-9302-eea7d618e9d4&cache=v2',
          channel: 'b207-jenkins'
        )
      }
    }

    failure {
      script {
        def authorName = sh(script: 'git show -s --pretty=%an', returnStdout: true).trim()
        def commiterName = sh(script: 'git show -s --pretty=%cn', returnStdout: true).trim()

        mattermostSend(
          color: 'danger',
          message: "${env.BRANCH_NAME}: ${commiterName}님이 커밋하고 ${authorName}님이 요청한 ${env.BUILD_NUMBER}번째 Merge 아직 안 나왔습니다. (<${env.BUILD_URL}|상세정보>)",
          endpoint: 'https://meeting.ssafy.com/hooks/4j87ayp3g7db9pg3nzun1efrdw',
          icon: 'https://www.notion.so/image/https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2699%2FPNG%2F512%2Fjenkins_logo_icon_170552.png?table=block&id=575d933c-a155-4d41-987e-887b341928ba&spaceId=0f7cf07a-b632-46e9-b39b-7c12c129b0d0&userId=fcb99ecb-2346-4edb-9302-eea7d618e9d4&cache=v2',
          channel: 'b207-jenkins'
        )
      }
    }
  }
}
