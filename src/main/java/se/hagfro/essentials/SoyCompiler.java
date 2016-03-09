package se.hagfro.essentials;

import com.google.template.soy.SoyFileSet;
import com.google.template.soy.jssrc.SoyJsSrcOptions;
import com.google.template.soy.tofu.SoyTofu;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

public class SoyCompiler { //TODO: Fix relative paths

    public static void main(String[] args) throws IOException {
        File src = new File(args[0]);
        File dest = new File(args[1]);
        SoyCompiler compiler = new SoyCompiler(src, dest);
        compiler.compile();
    }


    private File srcDir;
    private File destDir;
    private SoyJsSrcOptions options;

    public SoyCompiler(File srcDir, File destDir) {
        this.srcDir = srcDir;
        this.destDir = destDir;
        options = new SoyJsSrcOptions();
//        options.setCodeStyle(SoyJsSrcOptions.CodeStyle.CONCAT);
//        options.setShouldAllowDeprecatedSyntax(false);
//        options.setShouldGenerateJsdoc(false);
    }

    public void compile() throws IOException {
        destDir.mkdirs();

        List<File> soys = new LinkedList<>();
        findSoys(srcDir, soys);

        SoyFileSet.Builder builder = SoyFileSet.builder();
        soys.forEach(soyFile -> builder.add(soyFile.getAbsoluteFile()));

        SoyFileSet soyFileSet = builder.build();
        List<String> compiledData = soyFileSet.compileToJsSrc(options, null);

        export(compiledData, soys);
    }

    private void export(List<String> soyContent, List<File> files) throws IOException {
        if(soyContent.size() != files.size())
            throw new IllegalStateException("Unexpected state. Some files where not compiled.");

        String absoluteSrc = srcDir.getAbsolutePath();
        for(int i = 0; i < soyContent.size(); i++){
            String content = soyContent.get(i);
            String output = destDir.getAbsolutePath() + "/" + files.get(i).getName() + ".js";

            BufferedWriter out = new BufferedWriter(new FileWriter(new File(output)));
            out.write(content);
            out.close();
        }
    }

    private void findSoys(File src, List<File> list){
        if(src.isDirectory()){
            for(File file : src.listFiles()){
                if(file.isDirectory())
                    findSoys(file, list);
                else
                    list.add(file);
            }
        }
    }
}
