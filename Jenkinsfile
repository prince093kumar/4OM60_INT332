pipeline{
    agent any

    tools{
        maven 'maven3'
        jdk 'jdk21'
    }

    stages{
        stage('checkout'){
            steps{
                checkout scm
            }
        }
        stage('compile'){
            steps{
                dir('student-app'){
                    bat 'mvn compile'
                }
            }
        }
        stage('test'){
            steps{
                dir('student-app'){
                    bat 'mvn test'
                }
                
            }
        }
        stage('Build'){
            steps{
                dir('student-app'){
                    bat 'mvn clean package'
                }
                
            }
        }
    }
    post{
        success{
            echo 'Successfully package'
        }
        failure{
            echo "failed to package"
        }
    }
}