package tabletopstatistics;

import lombok.Data;

import java.util.List;
@Data
public class Statistics {

    /*
    here we are going to add the game statistics.
    basic features tu implement:
    - total of sessions played by game
    - total of wins per game
    - most played games
    - less played game
    - collection value
    - price per play of the chosen game



    */
    private int userId;
    private List<PlayedSessions> playedSession;
    private List<BoardGames> mostPlayedGames;
    private List<BoardGames> lessPlayedGames;
    private List<BoardGames> hotness;
    private int collectionValue;
    private int pricePerPlay;
    private int totalOfHoursPlayed;
    private String mostUsedColor;


}
