pipeline {
  agent any

  environment {
    REPO_NAME = "easyroutine-frontend"
    CONTAINER_NAME = "easyroutine-frontend-container"
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/Easy-Routine/EasyRoutine-Frontend.git', branch: 'main'
      }
    }

    stage('Set Image Tag') {
      steps {
        script {
          def ts = new Date().format("yyyyMMdd-HHmm", TimeZone.getTimeZone("Asia/Seoul"))
          env.IMAGE_TAG = "${REPO_NAME}:${ts}"
          echo "📦 Docker image tag: ${env.IMAGE_TAG}"
        }
      }
    }

    stage('Build Docker Image') {
      steps {
        sh """
          docker build -t ${IMAGE_TAG} .
        """
      }
    }

    stage('Run Container') {
      steps {
        sh """
          docker stop ${CONTAINER_NAME} || true
          docker rm ${CONTAINER_NAME} || true
          docker run -d --name ${CONTAINER_NAME} -p 80:80 ${IMAGE_TAG}
        """
      }
    }

    stage('Clean up old images') {
      steps {
        sh """
          docker images --format '{{.Repository}}:{{.Tag}}' | grep ${REPO_NAME} | grep -v ${IMAGE_TAG} | xargs -r docker rmi -f || true
        """
      }
    }
  }
}