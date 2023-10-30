FROM ruby:3.0

RUN mkdir -p /root
RUN cd /root && ruby add package seam && ruby irb
RUN rm /root/app.rb



