package ua.nure.commands.impl;

import ua.nure.commands.Command;

import javax.servlet.http.HttpServletRequest;

import static ua.nure.util.Constants.*;

public class ShowAdditionPageCommand implements Command {

    @Override
    public String execute(HttpServletRequest request) {
        return ADDITION_PAGE;
    }
}
