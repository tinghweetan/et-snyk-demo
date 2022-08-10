FROM ubuntu:20.04

#update environment
RUN apt-get -y upgrade
RUN apt-get -y update
RUN apt-get -y --with-new-pkgs upgrade
RUN apt-get -y autoremove

#install chrome
RUN apt-get -y install lsb-release libappindicator3-1 wget cron rsyslog
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb || true
RUN apt-get -fy install

#install curl
RUN apt-get -y install curl wget

#install chrome
RUN curl -LO https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get install -y ./google-chrome-stable_current_amd64.deb
RUN rm google-chrome-stable_current_amd64.deb 

#install node
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get -y install nodejs
WORKDIR /usr/src/app

#set time
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

COPY package*.json ./
RUN npm install

COPY . .
RUN crontab ./crontab
RUN sed -i 10,10s/#cron/cron/g /etc/rsyslog.d/50-default.conf
RUN sed -i '$a\CRON_TZ=Asia/Shanghai' /etc/crontab
RUN sed -i '$a\TZ=Asia/Shanghai' /etc/crontab

CMD service rsyslog restart && service cron restart && tail -f /var/log/cron.log
