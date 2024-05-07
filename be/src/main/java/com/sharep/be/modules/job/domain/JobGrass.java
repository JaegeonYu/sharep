package com.sharep.be.modules.job.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class JobGrass{
    int step;
    int count;

    public JobGrass(Integer count) {
        this.count = count;
        totalStep();
    }

    private void totalStep(){
        if(count == 0)return;
        step = (count / 4) + 1; // step 0, 1~4, count 4 == step 1
        step = Math.min(step, 4); // max step 4
    }
}
