package com.sharep.be.modules.assignee.domain;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum State {
    YET, NOW, DONE;

    @JsonCreator
    public static State from(String sub){
        for(State state : State.values()){
            System.out.println("check " + state.toString());
            if(state.toString().equals(sub))return state;
        }

        throw new RuntimeException("no type enum"); // TODO exception
    }
}
