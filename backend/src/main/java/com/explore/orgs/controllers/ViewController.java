package com.explore.orgs.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
public class ViewController {
    @RequestMapping({"/"})
    public String index() {
        return "forward:/index.html";
    }
}
}
