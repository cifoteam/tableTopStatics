package tabletopstatistics;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BoardGames {

    private int gameId;
    private String gameName;
    private int year;
    private int playerCountMin;
    private int playerCountMax;
    private int playingTimeMin;
    private int playingTimeMax;
    private int age;
    private String complexity;
    private String designer;
    private String artists;
    private List<ArrayList> gameCategory;
    private List<ArrayList> gameMechanics;
    private List<ArrayList> expansions;
    private int rating;
    private int price;
}
