package com.packagename.myapp;

import com.vaadin.flow.component.ClientCallable;
import com.vaadin.flow.component.dependency.JavaScript;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

@JavaScript("./script.js")
@Route
public class MainView extends Div {
    /*
    public MainView() {
        getElement().executeJs("greet($0, $1)", "client", getElement());
    }

    @ClientCallable
    public void greet(String name) {
        System.out.println("Hello, " + name);
    }
    */
    public MainView() {
        getElement().executeJs("start($0)", getElement());
    }

    @ClientCallable
    public void sayHi() {
        getElement().executeJs("chageButtonTextTo($0)", "clicked!");
    }
}