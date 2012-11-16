package emc.domain;

import com.emc.xcp.services.process.annotation.ProcessVariable;
import java.util.List;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@JsonPropertyOrder(alphabetic = true)
public class Da_def_create_workflow_invocation_initiateProcessVariables {

    @ProcessVariable(variableName = "component_ids")
    private List<String> component_ids;

    @ProcessVariable(variableName = "package_names")
    private List<String> package_names;

    public List<String> getComponent_ids(){
        return component_ids;
    }

    public void setComponent_ids(List<String> component_ids){
        this.component_ids = component_ids;
    }

    public List<String> getPackage_names(){
        return package_names;
    }

    public void setPackage_names(List<String> package_names){
        this.package_names = package_names;
    }

}