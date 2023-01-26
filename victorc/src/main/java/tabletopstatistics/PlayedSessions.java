package tabletopstatistics;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class PlayedSessions {
    private int sessionId;
    private BoardGames boardGame;
    private User player;
    private int day;
    private int sessionDuration;
    private boolean gameFinished;
    private boolean gamePaused;
    private boolean gameCanceled;
    private int win;
    private boolean userHasWin;
    private int lose;
    private boolean userHasLose;
    private int totalPlayers;

    private int score;
    private String colorUsedToPlay;

}