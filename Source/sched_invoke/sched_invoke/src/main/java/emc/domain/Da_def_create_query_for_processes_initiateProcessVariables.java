package emc.domain;

import com.emc.xcp.services.process.annotation.ProcessVariable;
import java.util.List;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@JsonPropertyOrder(alphabetic = true)
public class Da_def_create_query_for_processes_initiateProcessVariables {

    @ProcessVariable(variableName = "processes")
    private List<String> processes;

    public List<String> getProcesses(){
        return processes;
    }

    public void setProcesses(List<String> processes){
        this.processes = processes;
    }

}