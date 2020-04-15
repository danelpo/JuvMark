package com.packagename.myapp;

import com.vaadin.flow.component.ClientCallable;
import com.vaadin.flow.component.dependency.JavaScript;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

@JavaScript("./script.js")
@Route
public class MainView extends Div {

    public MainView() {
        getElement().executeJs("start($0)", getElement());
    }

    @ClientCallable
    public void setButtonText() {
        getElement().executeJs("changeTestButtonName($0)", "clicked!");
    }

}