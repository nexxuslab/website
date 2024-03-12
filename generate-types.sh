#!/bin/sh

home=$( pwd )

cd backend && npm run types:generate

cd $home

cp -r backend/src/@types frontend/src/@types

cd $home
