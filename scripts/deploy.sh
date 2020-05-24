#!/bin/bash
DIR=public
BRANCH=master

# Ensure clean worktree
rm -rf $DIR/*
git worktree prune

# Add build branch as worktree
git worktree add $DIR $BRANCH

# Build
hugo

# Commit/push to build worktree
git -C $DIR add -A
git -C $DIR commit -m "Build"
git -C $DIR push

# Clean up
git worktree remove $DIR
