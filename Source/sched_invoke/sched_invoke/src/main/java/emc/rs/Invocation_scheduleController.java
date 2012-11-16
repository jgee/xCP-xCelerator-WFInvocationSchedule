package emc.rs;

import com.emc.xcp.services.framework.rs.AbstractObjectController;
import emc.domain.Invocation_schedule;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller(value = "emc.rs.Invocation_scheduleController")
@RequestMapping(value = "/application/emc_invocation_schedules/{id}")
public class Invocation_scheduleController extends AbstractObjectController<Invocation_schedule> {
    public Invocation_scheduleController() {
        super(Invocation_schedule.class);
    }
}