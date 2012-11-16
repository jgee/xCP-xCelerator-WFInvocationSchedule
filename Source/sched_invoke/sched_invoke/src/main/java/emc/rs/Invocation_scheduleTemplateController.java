package emc.rs;

import com.emc.xcp.services.framework.rs.AbstractObjectTemplateController;
import emc.domain.Invocation_schedule;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller(value = "emc.rs.Invocation_scheduleTemplateController")
@RequestMapping(value = "/application/emc_invocation_schedules/template")
public class Invocation_scheduleTemplateController extends AbstractObjectTemplateController<Invocation_schedule> {
    public Invocation_scheduleTemplateController() {
        super(Invocation_schedule.class);
    }
}