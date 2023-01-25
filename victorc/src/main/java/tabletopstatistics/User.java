package tabletopstatistics;

import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User {
    //private boolean isAPublisher;
    //private boolean isADesigner;
    private int userId;
    private String firstName;
    private String lastName;
    private String userName;
    private String userCity;

    private String userEmail;
    private String userPassword;
    //private profilePicture?
    private int gamerLvl;
    private List<BoardGames> gameCollection;
    private List<Statistics> gamerStatistics;
    private List<PlayedSessions> playedSessions;

}
