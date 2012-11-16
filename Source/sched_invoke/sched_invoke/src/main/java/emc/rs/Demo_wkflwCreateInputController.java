package emc.rs;

import com.emc.xcp.services.process.rs.AbstractProcessCreateController;
import emc.domain.Da_def_create_demo_wkflw_initiateDomain;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller(value = "emc.rs.Demo_wkflwCreateInputController")
@RequestMapping(value = "/application/processes/emc_demo_wkflw", method = RequestMethod.POST)
public class Demo_wkflwCreateInputController extends AbstractProcessCreateController<Da_def_create_demo_wkflw_initiateDomain> {
    public Demo_wkflwCreateInputController() {
        super("emc_demo_wkflw", Da_def_create_demo_wkflw_initiateDomain.class);
    }
}