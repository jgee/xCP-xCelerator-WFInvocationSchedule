package emc.rs;

import com.emc.xcp.services.process.rs.AbstractProcessCreateController;
import emc.domain.Da_def_create_query_for_processes_initiateDomain;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller(value = "emc.rs.Query_for_processesCreateInputController")
@RequestMapping(value = "/application/processes/emc_query_for_processes", method = RequestMethod.POST)
public class Query_for_processesCreateInputController extends AbstractProcessCreateController<Da_def_create_query_for_processes_initiateDomain> {
    public Query_for_processesCreateInputController() {
        super("emc_query_for_processes", Da_def_create_query_for_processes_initiateDomain.class);
    }
}