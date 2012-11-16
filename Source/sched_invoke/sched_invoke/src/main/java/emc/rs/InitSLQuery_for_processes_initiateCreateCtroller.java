package emc.rs;

import com.emc.xcp.services.process.rs.AbstractProcessDataSourceControllerMultiObjects;
import emc.domain.Query_for_processes_initiateSLProcessInput;
import emc.domain.Query_for_processes_initiateSLProcessOutput;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller(value = "emc.rs.InitSLQuery_for_processes_initiateCreateCtroller")
@RequestMapping(value = "/application/processes/emc_query_for_processes_initiate", method = RequestMethod.GET)
public class InitSLQuery_for_processes_initiateCreateCtroller extends AbstractProcessDataSourceControllerMultiObjects<Query_for_processes_initiateSLProcessInput,Query_for_processes_initiateSLProcessOutput> {
    public InitSLQuery_for_processes_initiateCreateCtroller() {
        super("urn:emc:com.emc.ide.artifact.process:Artifacts/Processes/query_for_processes.process", Query_for_processes_initiateSLProcessInput.class,Query_for_processes_initiateSLProcessOutput.class);
    }
}