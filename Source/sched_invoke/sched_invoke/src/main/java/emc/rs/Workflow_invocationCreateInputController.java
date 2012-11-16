package emc.rs;

import com.emc.xcp.services.process.rs.AbstractProcessCreateController;
import emc.domain.Da_def_create_workflow_invocation_initiateDomain;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller(value = "emc.rs.Workflow_invocationCreateInputController")
@RequestMapping(value = "/application/processes/emc_workflow_invocation", method = RequestMethod.POST)
public class Workflow_invocationCreateInputController extends AbstractProcessCreateController<Da_def_create_workflow_invocation_initiateDomain> {
    public Workflow_invocationCreateInputController() {
        super("emc_workflow_invocation", Da_def_create_workflow_invocation_initiateDomain.class);
    }
}