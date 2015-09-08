FROM kyma/docker-nginx
ADD dist/ /var/www
CMD 'nginx'
