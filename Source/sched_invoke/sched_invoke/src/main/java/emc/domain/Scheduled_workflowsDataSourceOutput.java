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


@PersistentObject(superType = "dm_sysobject", type = "emc_invocation_schedule")
@Linked(template = "/application/emc_invocation_schedules")
@JsonPropertyOrder(alphabetic = true)
public class Scheduled_workflowsDataSourceOutput {

    @PersistentId
    @PersistentAttribute(name = "r_object_id")
    @Linked
    private String id;

    @CustomAttribute(id = "effectivePermissionsHandler")
    private List<String> effectivePermissions;

    @PersistentAttribute(name = "process_name")
    private String process_name;

    @PersistentAttribute(name = "next_invocation_time")
    private Date next_invocation_time;

    @PersistentAttribute(name = "is_active")
    private Boolean is_active;

    @PersistentAttribute(name = "package_delivery")
    private String package_delivery;

    @PersistentAttribute(name = "package_query")
    private String package_query;

    @PersistentAttribute(name = "r_object_type")
    private String r_object_type;

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

    public String getR_object_type(){
        return r_object_type;
    }

    public void setR_object_type(String r_object_type){
        this.r_object_type = r_object_type;
    }

    @JsonProperty
    public Map<String, Object> getLinks(){
        return LinkSource.getLinks(this);
    }

    @JsonIgnore
    public void setLinks(Map<String, Object> linkSource){
    }
}