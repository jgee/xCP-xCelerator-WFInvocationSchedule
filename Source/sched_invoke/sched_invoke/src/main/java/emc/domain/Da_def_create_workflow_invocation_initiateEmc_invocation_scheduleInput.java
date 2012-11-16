package emc.domain;

import com.emc.xcp.persistence.annotation.CustomAttribute;
import com.emc.xcp.persistence.annotation.PersistentAttribute;
import com.emc.xcp.persistence.annotation.PersistentId;
import com.emc.xcp.persistence.annotation.PersistentObject;
import com.emc.xcp.services.core.annotation.Linked;
import com.emc.xcp.services.framework.domain.LinkSource;
import java.util.Date;
import java.util.List;
import java.util.Map;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@PersistentObject(type = "emc_invocation_schedule")
@Linked(template = "/application/emc_invocation_schedules")
@JsonPropertyOrder(alphabetic = true)
public class Da_def_create_workflow_invocation_initiateEmc_invocation_scheduleInput {

    @PersistentId
    @PersistentAttribute(name = "r_object_id")
    @Linked
    private String id;

    @CustomAttribute(id = "effectivePermissionsHandler")
    private List<String> effectivePermissions;

    @PersistentAttribute(name = "object_name")
    private String object_name;

    @PersistentAttribute(name = "configuration_name")
    private String configuration_name;

    @PersistentAttribute(name = "frequency_picklist")
    private String frequency_picklist;

    @PersistentAttribute(name = "is_being_processed")
    private Boolean is_being_processed;

    @PersistentAttribute(name = "is_active")
    private Boolean is_active;

    @PersistentAttribute(name = "last_workflow_started")
    private String last_workflow_started;

    @PersistentAttribute(name = "next_invocation_time")
    private Date next_invocation_time;

    @PersistentAttribute(name = "package_delivery")
    private String package_delivery;

    @PersistentAttribute(name = "package_query")
    private String package_query;

    @PersistentAttribute(name = "process_name")
    private String process_name;

    public String getId(){
        return id;
    }

    public void setId(String id){
        this.id = id;
    }

    public List<String> getEffectivePermissions(){
        return effectivePermissions;
    }

    public void setEffectivePermissions(List<String> effectivePermissions){
        this.effectivePermissions = effectivePermissions;
    }

    public String getObject_name(){
        return object_name;
    }

    public void setObject_name(String object_name){
        this.object_name = object_name;
    }

    public String getConfiguration_name(){
        return configuration_name;
    }

    public void setConfiguration_name(String configuration_name){
        this.configuration_name = configuration_name;
    }

    public String getFrequency_picklist(){
        return frequency_picklist;
    }

    public void setFrequency_picklist(String frequency_picklist){
        this.frequency_picklist = frequency_picklist;
    }

    public Boolean getIs_being_processed(){
        return is_being_processed;
    }

    public void setIs_being_processed(Boolean is_being_processed){
        this.is_being_processed = is_being_processed;
    }

    public Boolean getIs_active(){
        return is_active;
    }

    public void setIs_active(Boolean is_active){
        this.is_active = is_active;
    }

    public String getLast_workflow_started(){
        return last_workflow_started;
    }

    public void setLast_workflow_started(String last_workflow_started){
        this.last_workflow_started = last_workflow_started;
    }

    public Date getNext_invocation_time(){
        return next_invocation_time;
    }

    public void setNext_invocation_time(Date next_invocation_time){
        this.next_invocation_time = next_invocation_time;
    }

    public String getPackage_delivery(){
        return package_delivery;
    }

    public void setPackage_delivery(String package_delivery){
        this.package_delivery = package_delivery;
    }

    public String getPackage_query(){
        return package_query;
    }

    public void setPackage_query(String package_query){
        this.package_query = package_query;
    }

    public String getProcess_name(){
        return process_name;
    }

    public void setProcess_name(String process_name){
        this.process_name = process_name;
    }

    @JsonProperty
    public Map<String, Object> getLinks(){
        return LinkSource.getLinks(this);
    }

    @JsonIgnore
    public void setLinks(Map<String, Object> linkSource){
    }
}