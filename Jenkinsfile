pipeline {
    agent any
    stages {
        stage('PULL') {
            steps {
                sh 'git pull https://github.com/Shiv3415/task.git '
            }
            
        }
        stage('BUILD') {
            steps {
                sh 'docker build -t shiv3415/image123 . '
            }
        }
        stage('PUSH') {
            steps {
                sh 'docker login -u shiv3415 -p Shiv3415@'
                sh 'docker push shiv3415/image123'
            }
        }
        stage('DEPLOY') {
            steps {
                kubernetesDeploy configs: 'deployment.yaml', kubeConfig: [path: ''], kubeconfigId: 'kubeconfigid', secretName: '', ssh: [sshCredentialsId: '*', sshServer: ''], textCredentials: [certificateAuthorityData: '', clientCertificateData: '', clientKeyData: '', serverUrl: 'https://']
            }
            
        }
    }
}