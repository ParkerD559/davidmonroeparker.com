#!/bin/bash

BUILD_DIR=public
BUILD_BRANCH=master

git --work-tree $BUILD_DIR checkout --force $BUILD_BRANCH

rm -rf $BUILD_BRANCH/*

hugo

git --work-tree $BUILD_DIR add -A
git --work-tree $BUILD_DIR commit -m "Build"
git --work-tree $BUILD_DIR push

git checkout --force -
