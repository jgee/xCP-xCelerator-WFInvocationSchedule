package emc.domain;

import com.emc.xcp.services.task.annotation.ProcessVariables;
import emc.domain.Da_def_create_query_for_processes_initiateProcessVariables;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@JsonPropertyOrder(alphabetic = true)
public class Da_def_create_query_for_processes_initiateDomain extends com.emc.xcp.services.process.domain.InitiateProcessBaseDomain {

    @ProcessVariables
    private Da_def_create_query_for_processes_initiateProcessVariables processVariables;

    public Da_def_create_query_for_processes_initiateProcessVariables getProcessVariables(){
        return processVariables;
    }

    public void setProcessVariables(Da_def_create_query_for_processes_initiateProcessVariables processVariables){
        this.processVariables = processVariables;
    }

}