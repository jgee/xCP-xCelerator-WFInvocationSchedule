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
import javax.persistence.ElementCollection;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@PersistentObject(superType = "dm_sysobject", type = "emc_invocation_schedule")
@Linked(template = "/application/emc_invocation_schedules")
@JsonPropertyOrder(alphabetic = true)
public class Invocation_schedule {

    @PersistentId
    @PersistentAttribute(name = "r_object_id")
    @Linked
    private String id;

    @CustomAttribute(id = "effectivePermissionsHandler")
    private List<String> effectivePermissions;

    @PersistentAttribute(name = "configuration_name")
    private String configuration_name;

    @PersistentAttribute(name = "process_name")
    private String process_name;

    @PersistentAttribute(name = "next_invocation_time")
    private Date next_invocation_time;

    @PersistentAttribute(name = "frequency_picklist")
    private String frequency_picklist;

    @PersistentAttribute(name = "is_active")
    private Boolean is_active;

    @PersistentAttribute(name = "package_delivery")
    private String package_delivery;

    @PersistentAttribute(name = "package_query")
    private String package_query;

    @PersistentAttribute(name = "is_being_processed")
    private Boolean is_being_processed;

    @PersistentAttribute(name = "last_workflow_started")
    private String last_workflow_started;

    @PersistentAttribute(name = "i_folder_id")
    @ElementCollection(targetClass = String.class)
    private List<String> i_folder_id;

    @PersistentAttribute(name = "r_creation_date")
    private Date r_creation_date;

    @PersistentAttribute(name = "r_creator_name")
    private String r_creator_name;

    @PersistentAttribute(name = "r_modify_date")
    private Date r_modify_date;

    @PersistentAttribute(name = "r_modifier")
    private String r_modifier;

    @PersistentAttribute(name = "r_object_type")
    private String r_object_type;

    @PersistentAttribute(name = "object_name")
    private String object_name;

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

    public String getConfiguration_name(){
        return configuration_name;
    }

    public void setConfiguration_name(String configuration_name){
        this.configuration_name = configuration_name;
    }

    public String getProcess_name(){
        return process_name;
    }

    public void setProcess_name(String process_name){
        this.process_name = process_name;
    }

    public Date getNext_invocation_time(){
        return next_invocation_time;
    }

    public void setNext_invocation_time(Date next_invocation_time){
        this.next_invocation_time = next_invocation_time;
    }

    public String getFrequency_picklist(){
        return frequency_picklist;
    }

    public void setFrequency_picklist(String frequency_picklist){
        this.frequency_picklist = frequency_picklist;
    }

    public Boolean getIs_active(){
        return is_active;
    }

    public void setIs_active(Boolean is_active){
        this.is_active = is_active;
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

    public Boolean getIs_being_processed(){
        return is_being_processed;
    }

    public void setIs_being_processed(Boolean is_being_processed){
        this.is_being_processed = is_being_processed;
    }

    public String getLast_workflow_started(){
        return last_workflow_started;
    }

    public void setLast_workflow_started(String last_workflow_started){
        this.last_workflow_started = last_workflow_started;
    }

    public List<String> getI_folder_id(){
        return i_folder_id;
    }

    public void setI_folder_id(List<String> i_folder_id){
        this.i_folder_id = i_folder_id;
    }

    public Date getR_creation_date(){
        return r_creation_date;
    }

    public void setR_creation_date(Date r_creation_date){
        this.r_creation_date = r_creation_date;
    }

    public String getR_creator_name(){
        return r_creator_name;
    }

    public void setR_creator_name(String r_creator_name){
        this.r_creator_name = r_creator_name;
    }

    public Date getR_modify_date(){
        return r_modify_date;
    }

    public void setR_modify_date(Date r_modify_date){
        this.r_modify_date = r_modify_date;
    }

    public String getR_modifier(){
        return r_modifier;
    }

    public void setR_modifier(String r_modifier){
        this.r_modifier = r_modifier;
    }

    public String getR_object_type(){
        return r_object_type;
    }

    public void setR_object_type(String r_object_type){
        this.r_object_type = r_object_type;
    }

    public String getObject_name(){
        return object_name;
    }

    public void setObject_name(String object_name){
        this.object_name = object_name;
    }

    @JsonProperty
    public Map<String, Object> getLinks(){
        return LinkSource.getLinks(this);
    }

    @JsonIgnore
    public void setLinks(Map<String, Object> linkSource){
    }
}