package emc.domain;

import com.emc.xcp.services.task.annotation.Packages;
import com.emc.xcp.services.task.annotation.ProcessVariables;
import emc.domain.Da_def_create_workflow_invocation_initiatePackages;
import emc.domain.Da_def_create_workflow_invocation_initiateProcessVariables;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@JsonPropertyOrder(alphabetic = true)
public class Da_def_create_workflow_invocation_initiateDomain extends com.emc.xcp.services.process.domain.InitiateProcessBaseDomain {

    @ProcessVariables
    private Da_def_create_workflow_invocation_initiateProcessVariables processVariables;

    @Packages
    private Da_def_create_workflow_invocation_initiatePackages processPackages;

    public Da_def_create_workflow_invocation_initiateProcessVariables getProcessVariables(){
        return processVariables;
    }

    public void setProcessVariables(Da_def_create_workflow_invocation_initiateProcessVariables processVariables){
        this.processVariables = processVariables;
    }

    public Da_def_create_workflow_invocation_initiatePackages getProcessPackages(){
        return processPackages;
    }

    public void setProcessPackages(Da_def_create_workflow_invocation_initiatePackages processPackages){
        this.processPackages = processPackages;
    }

}