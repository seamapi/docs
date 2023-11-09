FROM ruby:3.0

RUN gem install seamapi
RUN mkdir -p /root
RUN cd /root 
RUN rm -rf /root/app.rb
