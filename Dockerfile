FROM node:13

# # Install postgresql 
# ENV PGVER 9.6

# RUN apt-get -y update \
#   && apt-get install -y wget curl python \
#   && (echo deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main > /etc/apt/sources.list.d/pgdg.list) \
#   && wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - \
#   && apt-get -y update \
#   && apt-get install -y postgresql-$PGVER

# # Run the rest of the commands as the ``postgres`` user created by the ``postgres-$PGVER`` package when it was ``apt-get installed``
# USER postgres

# # Create a PostgreSQL role named ``docker`` with ``docker`` as the password and
# # then create a database `docker` owned by the ``docker`` role.
# RUN /etc/init.d/postgresql start && psql --command "CREATE USER docker WITH SUPERUSER PASSWORD 'docker';" \
#   && createdb -O docker docker && /etc/init.d/postgresql stop

# # Adjust PostgreSQL configuration so that remote connections to the
# # database are possible.
# RUN echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/$PGVER/main/pg_hba.conf

# # And add ``listen_addresses`` to ``/etc/postgresql/$PGVER/main/postgresql.conf``
# RUN echo "listen_addresses='*'" >> /etc/postgresql/$PGVER/main/postgresql.conf && \
#   echo "synchronous_commit = off" >> /etc/postgresql/$PGVER/main/postgresql.conf && \
#   echo "shared_buffers = 256MB" >> /etc/postgresql/$PGVER/main/postgresql.conf && \
#   echo "autovacuum = off" >> /etc/postgresql/$PGVER/main/postgresql.conf


# # Expose the PostgreSQL port
# EXPOSE 5432

# # Add VOLUMEs to allow backup of config, logs and databases
# VOLUME  ["/etc/postgresql", "/var/log/postgresql", "/var/lib/postgresql"]

# # Back to the root user
# USER root

# Install nodejs
# RUN apt-get install libpq-dev -y \
#   && apt-get install build-essential -y \
#   && (curl -sL https://deb.nodesource.com/setup_14.x | bash -) \
#   && apt-get install -y nodejs

ADD . /project
WORKDIR /project
# We can add it after install nodejs in the same step
RUN npm install && npm run build
# && npm run dev:build-client

# Set port
EXPOSE 5000

# Run PostgreSQL и server
# ENV PGPASSWORD docker
# CMD service postgresql start && psql -h localhost -U docker -d docker -f ./sql/schema.sql && npm start
CMD npm start



# FROM node:13 

# COPY dist ./dist 
# COPY package*.json ./ 
# COPY server.js ./ 

# RUN npm ci

# EXPOSE 80

# CMD node server.js