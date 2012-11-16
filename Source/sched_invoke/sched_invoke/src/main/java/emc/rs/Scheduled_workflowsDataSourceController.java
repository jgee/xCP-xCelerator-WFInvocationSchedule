package emc.rs;

import com.emc.xcp.services.datasource.domain.Query;
import com.emc.xcp.services.datasource.realtime.rs.RealtimeController;
import emc.domain.Scheduled_workflowsDataSourceOutput;
import javax.inject.Inject;
import javax.inject.Named;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller(value = "emc.rs.Scheduled_workflowsDataSourceController")
@RequestMapping(value = "/application/emc_invocation_schedules", params = "type=emc_scheduled_workflows")
public class Scheduled_workflowsDataSourceController extends RealtimeController<Scheduled_workflowsDataSourceOutput> {
    public Scheduled_workflowsDataSourceController() {
        super(Scheduled_workflowsDataSourceOutput.class);
    }

    public Query getQuery(){
        return query;
    }


    @Inject
    @Named(value = "emc_scheduled_workflows")
    private Query query;


}