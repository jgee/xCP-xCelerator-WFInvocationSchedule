package emc.domain;

import com.emc.xcp.services.process.annotation.ProcessPackage;
import emc.domain.Da_def_create_workflow_invocation_initiateEmc_invocation_scheduleInput;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@JsonPropertyOrder(alphabetic = true)
public class Da_def_create_workflow_invocation_initiatePackages {

    @ProcessPackage(name = "invoke_schedule")
    private Da_def_create_workflow_invocation_initiateEmc_invocation_scheduleInput invoke_schedule;

    public Da_def_create_workflow_invocation_initiateEmc_invocation_scheduleInput getInvoke_schedule(){
        return invoke_schedule;
    }

    public void setInvoke_schedule(Da_def_create_workflow_invocation_initiateEmc_invocation_scheduleInput invoke_schedule){
        this.invoke_schedule = invoke_schedule;
    }

}