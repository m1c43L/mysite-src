sudo ln -s /etc/nginx/sites-available/m1c.dev /etc/nginx/sites-enabled/m1c.dev
sudo nginx -t
sudo /etc/init.d/nginx restart