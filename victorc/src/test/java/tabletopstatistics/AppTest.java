package tabletopstatistics;


import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit test for simple App.
 */
public class AppTest
{

    @Test
    public void testCreateSession(){
        PlayedSessions firstSession = new PlayedSessions();
        PlayedSessions secondSession = new PlayedSessions();
        firstSession.setTotalPlayers(4);
        firstSession.toString();
        assertEquals(4, firstSession.getTotalPlayers());
        assertNotEquals(2, firstSession.getTotalPlayers());

    }
}
